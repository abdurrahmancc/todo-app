import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "./Loading";
import TaskTable from "./TaskTable";

const TodoApp = () => {
  const [inputInfo, setInputInfo] = useState({});

  const { data, isLoading, refetch } = useQuery("task", () =>
    axios.get(`http://localhost:5000/task`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  console.log(data);
  const handleForm = async (e) => {
    e.preventDefault();
    const info = {
      task: e.target.task.value,
      taskDescription: e.target.task.value,
    };

    const doctorResult = await axios.post("http://localhost:5000/task", info, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (doctorResult.status === 200) {
      refetch();
      toast.success("task added successfully");
      e.target.reset();
    } else {
      toast.error("fail to add tha task");
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mt-5">TODO APP</h1>
      <form onSubmit={handleForm} className="flex flex-col items-center gap-3  my-8">
        <input
          name="task"
          type="text"
          placeholder="Add task"
          class="input input-bordered  w-full max-w-lg"
        />
        <textarea
          name="taskDescription"
          class="textarea textarea-bordered w-full max-w-lg"
          placeholder="Task Description"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          add task
        </button>
      </form>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Description</th>
              <th>Complete</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.data.map((d, index) => (
                <TaskTable refetch={refetch} key={d._id} index={index} d={d}></TaskTable>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoApp;
