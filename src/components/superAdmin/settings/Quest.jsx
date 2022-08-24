import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import { Label, TextInput, Spinner } from "flowbite-react";
import axios from "axios";

function Quest({ setisSettingQuest }) {
  const api_url = import.meta.env.VITE_API_URL;
  const [isUpdating, setisUpdating] = useState(false);
  const [securityQuestion, setsecurityQuestion] = useState("");
  const [securityAnswer, setsecurityAnswer] = useState("");

  const notifyWarning = (msg) =>
    toast.warn(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifySuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const submitupdate = () => {
    setisUpdating(true);
    const token = sessionStorage.getItem("super_token");
    if (!token) {
      navigate("/superadmin/login");
    }
    var formdata = new FormData();
    formdata.append("security_question", securityQuestion);
    formdata.append("security_answer", securityAnswer);

    axios
      .post(`${api_url}/set_securityquestion_and_answer`, formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //setcustomer(res.data);
        console.log(res.data);
        notifySuccess("question set successfully");
        setisSettingQuest((prev) => !prev);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        setisUpdating(false);
      });
  };

  return (
    <form className="flex flex-col md:gap-4 md:w-8/12 mx-auto pt-4">
      <div className="md:flex  w-full">
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="secret" value="secret question" />
          </div>
          <select
            name=""
            id=""
            className="w-[100%] md:w-[80%] rounded-lg border border-gray-300"
            value={securityQuestion}
            onChange={(e) => setsecurityQuestion(e.target.value)}
            required={true}
          >
            <option value="What was your gpa">What was your gpa</option>
            <option value="what city was your mother given birth to">
              what city was your mother given birth to
            </option>
            <option value="name of your favourite food">
              name of your favourite food
            </option>
          </select>
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="Answer" value="Answer" />
          </div>
          <TextInput
            id="Answer"
            type="text"
            value={securityAnswer}
            onChange={(e) => setsecurityAnswer(e.target.value)}
            required={true}
          />
        </div>
      </div>
      <div className="w-full mt-2 mb-2 text-center flex justify-between items-center">
        {isUpdating ? (
          <Spinner aria-label="Extra large spinner example" size="xl" />
        ) : (
          <HiCheck
            className="h-10 w-10 text-green-500"
            onClick={() => submitupdate()}
          />
        )}
        <MdOutlineCancel
          className="h-10 w-10 text-red-500"
          onClick={() => setisSettingQuest((prev) => !prev)}
        />
      </div>
    </form>
  );
}

export default Quest;
