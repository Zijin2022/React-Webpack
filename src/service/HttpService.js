
// mainDelete(params: any): Observable<any> {
//   return this.http.post(`${this.baseApiUrl}/mainDelete`, params);
// }
export function post(url, params) {
  return fetch( url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  })
  .then(response => {
    return response.json();
  })
  .catch(error => console.log(error))
}