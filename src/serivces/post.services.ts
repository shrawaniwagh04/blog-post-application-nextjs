import { BASE_URL } from "./service";

export async function getPosts() {
  try {
    let response = await fetch(`${BASE_URL}`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export async function getPost(Id: string | undefined | string[]) {
    try {
    let response = await fetch(`${BASE_URL}/${Id}`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export async function getComment(Id: string | string[] | undefined) {
    try {
    let response = await fetch(`${BASE_URL}/${Id}/comments`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
