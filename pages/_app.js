import Script from 'next/script';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SessionProvider, signOut } from 'next-auth/react';
import dynamoose from 'dynamoose';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [updatingUser, setUpdatingUser] = useState(true);


  const getUser = async () => {
    await fetch(`/api/manage-user`, {
      method: "POST",
      body: localStorage.getItem('user'),
    }).then(async (res) => {
      let data = await res.json()
      setUser(data);
    });
    setUpdatingUser(false)
  };

  useEffect(() => {
    if (
      localStorage.getItem("user").toString() !== "null"
    ) {
      getUser();
    }
  }, [updatingUser]);


  const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
      "accessKeyId": "AKIAZT2RUSWSA6BON4GT",
      "secretAccessKey": "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"
    },
    "region": "us-east-1",
    "Region": "us-east-1",
  });

  dynamoose.aws.ddb.set(ddb)


  const updateUser = async (data) => {
    // console.log(user)
    await fetch(`/api/update-user/${user.email}`, {
      method: "PUT",
      body: JSON.stringify(data)
    })
    setUpdatingUser(true)
  }

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

  const getChannel = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=brandingSettings,contentDetails,contentOwnerDetails,id,localizations,statistics,status,topicDetails,snippet&mine=true&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&maxResults=10000`, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(user.tokens).access_token}`,
      }
    });
    const data = await response.json()

    await updateUser({
      channels: JSON.stringify(data)
    })

    // setTimeout(async () => {
    //   getPlaylists(data.items[0].id, access_key)
    // }, 2000);
  }
  const getTokens = async () => {
    console.log(router?.query?.code, process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, process.env.NEXT_PUBLIC_GOOGLE_SECRET)
    const response = await fetch(`https://accounts.google.com/o/oauth2/token?code=${router?.query?.code}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GOOGLE_SECRET}&redirect_uri=http://localhost:3000&grant_type=authorization_code`, {
      method: 'POST',
      body: JSON.stringify({
        code: router?.query?.code,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
        redirect_uri: 'http://localhost:3000',
        grant_type: 'authorization_code'
      })
    });
    const data = await response.json();
    console.log(data)
    // getChannel(data.access_token);
    await updateUser({
      tokens: JSON.stringify({
        access_token: data.access_token, refresh_token: data.refresh_token, expires_in: (data.expires_in * 1000 + new Date().getTime())
      })
    })
  }




  useEffect(() => {

    if (user && !user.tokens) {

      if (router?.query?.code) {
        // setTimeout(() => {
        getTokens()
        // }, 2000);
      }
    } else if (user && user.tokens && !user.channels) {
      getChannel()
    }

    // signOut()

  }, [router, user]);


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
