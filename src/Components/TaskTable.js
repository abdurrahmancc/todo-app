import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const TaskTable = ({ index, d, refetch }) => {
  const [through, setThroough] = useState(false);
  const handleDelete = async (id) => {
    const { data } = await axios.delete(`http://localhost:5000/task/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (data.acknowledged) {
      toast.success(`deleted success`);

      refetch();
    }
  };
  return (
    <>
      <tr class="hover">
        <th>{index + 1}</th>
        <td className={through && "line-through"}>{d?.task}</td>
        <td>{d?.taskDescription}</td>
        <td onClick={() => setThroough(true)} className="cursor-pointer">
          Completed
        </td>
        <td onClick={() => handleDelete(d?._id)} className="cursor-pointer">
          Delete
        </td>
      </tr>
    </>
  );
};

export default TaskTable;
