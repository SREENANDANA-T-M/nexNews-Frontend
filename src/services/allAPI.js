import commonAPI from "./commonAPI";
import { ServerURL } from "./ServerURL";

// Admin Login

export const loginAPI = async (reqBody) => {
  return await commonAPI("POST",`${ServerURL}/login`,reqBody);
};

// add news
export const addNewsAPI = async (reqBody) => {
  return await commonAPI("POST",`${ServerURL}/news/add`,reqBody);
};

// get all news
export const getAllNewsAPI = async () => {
  return await commonAPI("GET",`${ServerURL}/news/all`);
};

// get a particular news
export const getANewsAPI = async (id) => {
  return await commonAPI("GET",`${ServerURL}/news/${id}`);
};

// update news
export const updateNewsAPI = async (id,reqBody) => {
  return await commonAPI("PUT",`${ServerURL}/news/update/${id}`,reqBody);
};

// delete news
export const deleteNewsAPI = async (id) => {

  return await commonAPI("DELETE",`${ServerURL}/news/delete/${id}`);

};

// schedule news
export const scheduleNewsAPI = async (id,reqBody) => {

  return await commonAPI("PUT",`${ServerURL}/news/schedule/${id}`,reqBody);

};


// publish news
export const publishNewsAPI = async (id) => {

  return await commonAPI("PUT",`${ServerURL}/news/publish/${id}`);

};

// dashboard count
export const getDashboardStatsAPI =async () => {

    return await commonAPI("GET",`${ServerURL}/dashboard/stats`);

};


// get profile
export const getProfileAPI = async (reqHeader) => {

  return await commonAPI( "GET",`${ServerURL}/profile`,"",reqHeader);

};

// update profile
export const updateProfileAPI =async (reqBody,reqHeader) => {

    return await commonAPI("PUT",`${ServerURL}/profile/update`, reqBody, reqHeader);

  };

// change password
export const changePasswordAPI =async (reqBody,reqHeader) => {

    return await commonAPI("PUT",`${ServerURL}/change-password`,reqBody,reqHeader);

  };

  // get latest news on the home page slider
  export const getLatestNewsAPI = async () => {
  return await commonAPI("GET",`${ServerURL}/latest-news`);
};

// get news card
export const getNewsCardsAPI = async () => {

  return await commonAPI("GET",`${ServerURL}/news-cards`);

};

// search
export const searchNewsAPI = async (keyword) => {

  return await commonAPI("GET",`${ServerURL}/search-news?keyword=${keyword}`);

};
