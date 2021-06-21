export default class GetSendData {
  static todoApiUrl = 'http://localhost:3002/api/todos';

  // static getAll(succesCallback) {
  //   fetch(GetSendData.todoApiUrl)
  //     .then((resp) => resp.json())
  //     .then((data) => succesCallback(data))
  //     .catch((err) => console.log(err));
  // }

  static async getAll(succesCallback) {
    try {
      const resp = await fetch(GetSendData.todoApiUrl);
      const data = await resp.json();
      succesCallback(data);
    } catch (err) {
      console.error('getAll errror', err);
    }
  }

  // static createOne(newTodo, successCallback) {
  //   fetch(GetSendData.todoApiUrl + '/new', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newTodo),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => successCallback(data))
  //     .catch((err) => console.log(err));
  // }
  static async createOne(newTodo, successCallback) {
    try {
      const resp = await fetch(GetSendData.todoApiUrl + '/new', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      const data = await resp.json();
      successCallback(data);
    } catch (err) {
      console.log(err);
    }
  }
  static async deleteOne(id, successCallback) {
    const resp = await fetch(`${GetSendData.todoApiUrl}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await resp.json();
    successCallback(data);

    // console.log('id fetche', id);

    // fetch(`${GetSendData.todoApiUrl}/delete/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   // body: JSON.stringify(newTodo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => successCallback(data))
    //   .catch((err) => console.error(err.message));
  }
  static async updateOne(id, data, successCallback) {
    const resp = await fetch(`${GetSendData.todoApiUrl}/edit/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const ats = await resp.json();
    successCallback(ats);
    // .then((res) => res.json())
    // .then((data) => successCallback(data))
    // .catch((err) => console.error(err.message));
  }
}
