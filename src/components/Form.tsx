import React from "react";
import { useState, useEffect } from "react";
import { deleteJob, updateJob, addJob, getJobs } from "../api/todoApi";
import classnames from "classnames";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TODO_STATUS } from "../constants/todo";

const Form = () => {
  const [stateString, setStateString] = useState<string>();
  const [stateArray, setStateArray] = useState<any[]>([]);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    getJobs().then((data: any) => {
      console.log(data);
      setStateArray(data);
      // const texts = data.map((item: any) => item.text);
      // setStateArray([...stateArray, ...texts]);
    });
  }, [reloadData]);

  const addToList = () => {
    if (stateString !== "") {
      setStateArray([...stateArray, stateString]);
      console.log(stateString);
      setStateString("");
    }
  };

  const [stateCheck, setStatCheck] = useState(
    "./assets/Radio_button_unchecked.png"
  );

  const handleAddJob = () => {
    addJob({
      text: stateString,
      status: TODO_STATUS.uncompleted,
    }).then(() => {
      setReloadData(!reloadData);
    });
    console.log(stateString);
    setStateString("");
  };

  const handleDeleteJob = (id: any) => {
    deleteJob(id).then(() => {
      setReloadData(!reloadData);
    });
    // setReloadData(!reloadData); //
  };

  const handleUpdateCompleted = (id: any, data: any): any => {
    updateJob(id, {
      ...data,
      status:
        data?.status === TODO_STATUS.uncompleted
          ? TODO_STATUS.completed
          : TODO_STATUS.uncompleted,
    }).then(() => {
      setReloadData(!reloadData);
    });
  };

  const handleClearCompleted = async () => {
    const completedJobs: any[] = stateArray.filter(
      (job: any) => job?.status === TODO_STATUS.completed
    );
    for (const job of completedJobs) {
      await deleteJob(job?.id);
    }
    setReloadData(!reloadData);
  };

  return (
    <div>
      <div className="col-md-7 mx-auto my-5">
        {/* <form> */}
        <div className="form-group rounded-0 d-flex">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              placeholder="nhap vao day"
              style={{
                backgroundColor: "#F1ECE6",
              }}
              onChange={(event) => {
                setStateString(event.target.value);
              }}
              value={stateString}
            />
            <button
              className="btn btn-primary  "
              type="button"
              id="button-addon2"
              // onClick={addToList}
              onClick={handleAddJob}
            >
              ADD
            </button>
          </div>
        </div>
        <div
          className="mx-auto my-3"
          style={{
            width: "100%",
            height: "auto",
            // border: "1px solid black",
            padding: "10px 30px",
            borderRadius: "30px",
            backgroundColor: "#F1ECE6",
          }}
        >
          {stateArray.map((job, index) => {
            return (
              <div className="my-2 " key={index}>
                {job?.status === TODO_STATUS.uncompleted && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <img
                        src="./assets/Radio_button_unchecked.png"
                        alt="ảnh không hiển thị được"
                        style={{
                          width: "40px",
                          height: "auto",
                          cursor: "pointer",
                        }}
                        onClick={() => handleUpdateCompleted(job?.id, job)}
                      />
                      {/* <input type="checkbox" name="checkbox" id="checkbox" /> */}
                      {job?.text} No.{index + 1}
                      {/* <span
                      style={{ textDecoration: "line-through", opacity: 0.5 }}
                    >
                      {job?.text} No.{index + 1}
                    </span> */}
                    </div>

                    <div
                      onClick={() => {
                        handleDeleteJob(job?.id);
                      }}
                    >
                      {/* <i className="bi bi-trash"></i> */}
                      <img
                        src="./assets/bin.png"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                )}
                {job?.status === TODO_STATUS.completed && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <img
                        src="./assets/Radio_button_checked.png"
                        alt="ảnh không hiển thị được"
                        style={{
                          width: "40px",
                          height: "auto",
                          cursor: "pointer",
                        }}
                        onClick={() => handleUpdateCompleted(job?.id, job)}
                      />
                      {/* <input type="checkbox" name="checkbox" id="checkbox" /> */}
                      {/* {job?.text} No.{index + 1} */}
                      <span
                        style={{ textDecoration: "line-through", opacity: 0.5 }}
                      >
                        {job?.text} No.{index + 1}
                      </span>
                    </div>

                    <div
                      onClick={() => {
                        handleDeleteJob(job?.id);
                      }}
                    >
                      {/* <i className="bi bi-trash"></i> */}
                      <img
                        src="./assets/bin.png"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                )}
                <div className="mx-auto col-md-11">
                  <img
                    className="mx-auto col-md-12"
                    src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"
                  ></img>
                </div>
              </div>
            );
          })}
          <div
            className="mx-auto my-3"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button
              onClick={handleClearCompleted}
              style={{
                // width: "20%",
                backgroundColor: "#F1ECE6",
                borderRadius: "30px",
              }}
            >
              <img
                src="./assets/clear.png"
                alt="ảnh không hiển thị được"
                style={{
                  width: "120px",
                  height: "auto",
                }}
              />
            </button>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Form;
