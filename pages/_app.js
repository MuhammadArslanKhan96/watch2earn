import Script from 'next/script';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SessionProvider, signOut } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const getVideo = async (id, access_key) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,id,localizations,player&id=${id}&key=${localStorage.getItem('GOOGLE_API_KEY')}&maxResults=10000`, {
      headers: {
        'Authorization': `Bearer ${access_key}`,
      }
    });
    const data = await response.json();
    return data
  }


  const getPlaylistsItems = async (id, access_key) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails,id,snippet,status&playlistId=${id}&key=${localStorage.getItem('GOOGLE_API_KEY')}&maxResults=10000`, {
      headers: {
        'Authorization': `Bearer ${access_key}`,
      }
    });
    const data = await response.json();
    if (data.items.length) {
      let arr = [];

      setTimeout(() => {
        data.items.forEach(async (item) => {
          const resolvedItem = await getVideo(item.snippet.resourceId.videoId, access_key);
          arr.push(resolvedItem);


          if (arr.length === data.items.length) {
            localStorage.setItem('videos', JSON.stringify(arr));
          }
        })
      }, 2000);
    }
    return data;
  }


  const getPlaylists = async (channelId, access_key) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails,id,localizations,player,snippet,status&channelId=${channelId}&key=${localStorage.getItem('GOOGLE_API_KEY')}&maxResults=10000`, {
      headers: {
        'Authorization': `Bearer ${access_key}`,
      }
    });

    const data = await response.json()
    localStorage.setItem('playlists', JSON.stringify(data));

    if (data.items.length) {
      let arr = [];
      setTimeout(() => {
        data.items.forEach(async (item) => {
          const resolvedItem = await getPlaylistsItems(item.id, access_key);
          arr.push(resolvedItem);


          if (arr.length === data.items.length) {
            localStorage.setItem('playlistItems', JSON.stringify(arr));
          }

        })
      }, 2000);
    }
  }

  const getChannel = async (access_key) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=brandingSettings,contentDetails,contentOwnerDetails,id,localizations,statistics,status,topicDetails,snippet&mine=true&key=${localStorage.getItem('GOOGLE_API_KEY')}&maxResults=10000`, {
      headers: {
        'Authorization': `Bearer ${access_key}`,
      }
    });
    const data = await response.json()
    localStorage.setItem('channels', JSON.stringify(data));

    setTimeout(async () => {
      getPlaylists(data.items[0].id, access_key)
    }, 2000);
  }
  const getTokens = async () => {
    const response = await fetch(`https://accounts.google.com/o/oauth2/token?code=${localStorage.getItem('code')}&client_id=${localStorage.getItem('GOOGLE_CLIENT_ID')}&client_secret=${localStorage.getItem('GOOGLE_SECRET')}&redirect_uri=http://localhost:3000&grant_type=authorization_code`, {
      method: 'POST',
      body: JSON.stringify({
        code: localStorage.getItem('code'),
        client_id: '515070853986-ruq2r9lpvkvo51ao2slg8o5e5s3v65ha.apps.googleusercontent.com',
        client_secret: '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',
        redirect_uri: 'http://localhost:3000',
        grant_type: 'authorization_code'
      })
    });
    const data = await response.json();
    getChannel(data.access_token)
    localStorage.setItem('access_token', data.access_token)
    localStorage.setItem('refresh_token', data.refresh_token)
    localStorage.setItem('expires_in', (data.expires_in * 1000 + new Date().getTime()))
  }




  useEffect(() => {

    if (localStorage.getItem('access_key') === null) {
      localStorage.setItem('GOOGLE_CLIENT_ID', '515070853986-ruq2r9lpvkvo51ao2slg8o5e5s3v65ha.apps.googleusercontent.com')
      localStorage.setItem('GOOGLE_SECRET', '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')
      localStorage.setItem('GOOGLE_API_KEY', 'AIzaSyDmH99AWnBnPzyLVaQBnEppDLkky8XfTI0')

      if (router?.query?.code) {
        localStorage.setItem('code', router?.query?.code);
        setTimeout(() => {
          getTokens()

        }, 2000);
      }
    }

    // signOut()

  }, [router]);


  useEffect(() => {
    if (localStorage.getItem('access_key') !== null) {
      const interval = setInterval(async () => {
        if (localStorage.getItem('expires_in') - 1 < new Date().getTime()) {
          const response = await fetch(`https://accounts.google.com/o/oauth2/token?client_id=${localStorage.getItem('GOOGLE_CLIENT_ID')}&client_secret=${localStorage.getItem('GOOGLE_SECRET')}&refresh_token=${localStorage.getItem('refresh_token')}&grant_type=refresh_token`, {
            method: 'POST',
            body: JSON.stringify({
              client_id: localStorage.getItem('GOOGLE_CLIENT_ID'), client_secret: localStorage.getItem('GOOGLE_SECRET'), refresh_token: localStorage.getItem('refresh_token'), grant_type: 'refresh_token'
            })
          })
          const data = response.json();
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('expires_in', (data.expires_in * 1000 + new Date().getTime()))
        }
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [new Date().getTime()])
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-D11JBK2RCD`}
      />
      <Script
        id="my-script"
        strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D11JBK2RCD');
        `}
      </Script>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
