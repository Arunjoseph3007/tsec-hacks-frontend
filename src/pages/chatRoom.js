import { useUser } from "@/context/userContext";
import { app, firebase, firestore } from "@/libs/firebase";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Chat() {
  const msgRef = firestore.collection("messages");
  const query = msgRef.orderBy("createdAt");
  const [newMsg, setNewMsg] = useState("");
  const { user } = useUser();
  const [messages] = useCollectionData(query, { idField: "id" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userId, photoUrl } = user;

    await msgRef.add({
      text: newMsg,
      uid: userId,
      photoUrl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setNewMsg("");
  };

  return (
    <div className="h-[90vh] w-[60%] mx-auto my-4 shadow-xl flex flex-col justify-between">
      <div className="bg-neutral text-white font-bold text-2xl px-8 py-4">
        Chat with interested user
      </div>
      <div className="flex flex-col flex-1 p-2 gap-3">
        {messages &&
          messages.map((msg) => {
            const { uid, text, photoUrl, id } = msg;
            const sent = uid == uid;
            return (
              <div
                className={`chat-bubble flex items-center gap-3 ${
                  sent && "self-end"
                }`}
                key={id}
              >
                <img
                  src={
                    photoUrl ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  className="avatar rounded-full w-8"
                />
                <h3>{text}</h3>
              </div>
            );
          })}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          type="text"
          className="input input-bordered flex-1"
          placeholder="Enter you message"
        />
        <button className="btn">send</button>
      </form>
    </div>
  );
}
