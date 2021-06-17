export const getAllJobAds = async () => {
  let res = await fetch(process.env.API_PATH + "/jobAd/all", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  let jobAds = await res.json();

  return jobAds;
};

export const getJobAd = async (id) => {
  let res = await fetch(process.env.API_PATH + "/jobAd/" + id, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  let jobAd = await res.json();

  return jobAd;
};
