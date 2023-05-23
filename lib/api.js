export const sendContactForm = async (data) =>
    fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
        console.log({ res });
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    }).catch(e => {
        console.error(e.message)
    });