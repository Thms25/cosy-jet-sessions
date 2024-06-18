import { google } from "googleapis";

export function getYoutubeClient(accessToken) {
  return google.youtube({
    version: "v3",
    auth: accessToken,
  });
}

export async function likeVideo(videoId, token) {
  try {
    const youtube = getYoutubeClient(token);
    const { data } = await youtube.videos.rate({
      id: videoId,
      rating: "like",
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function subscribe(token) {
  try {
    const youtube = getYoutubeClient(token);
    const { data } = await youtube.subscriptions.insert({
      part: "snippet",
      requestBody: {
        snippet: {
          resourceId: {
            kind: "youtube#channel",
            channelId: "UCdlvOT8isQcuCrxzWgroGZQ",
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
