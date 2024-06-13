import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";

const DramasList = () => {
  const [dramaList, setDramaList] = useState([]);

  const dramasCollectionRef = collection(db, "Dramas");

  const getDramaList = async () => {
    try {
      const data = await getDocs(dramasCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDramaList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteDrama = async (id) =>{
    const dramaDoc = doc(dramasCollectionRef,id)
    await deleteDoc(dramaDoc)
    getDramaList()
    //  the same is for update await updateDoc(dramaDoc,{Name : updateName(make state of it)})
  }
  useEffect(() => {
    getDramaList();
  }, []);

  return (
    <div>
      <h1>Firebase Get Data</h1>
      <table>
        <thead>
          <tr>
            <th>Drama Name</th>
            <th>Actor Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {dramaList.map((drama) => (
            <tr key={drama.id}>
              <td>{drama.Name}</td>
              <td>{drama.Actor}</td>
              <td>{drama.Rating}</td>
              <button onClick={(e) => deleteDrama(drama.id)}>Delete Drama</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DramasList;
