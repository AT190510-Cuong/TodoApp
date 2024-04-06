import axios from "axios";

const baseUrl = "http://localhost:3001/todos";

export const getJobs = async () => {
  const res = await axios.get(baseUrl);
  return res?.data;
};

export const addJob = async (data: any) => {
  const res = await axios.post(baseUrl, data);
  return res?.data;
};

export const updateJob = async (id: any, data: any) => {
  const updateUrl = `${baseUrl}/${id}`;
  const res = await axios.put(updateUrl, data);
  return res?.data;
};

export const deleteJob = async (id: any) => {
  const deleteUrl = `${baseUrl}/${id}`;
  await axios.delete(deleteUrl);
};
