export default function useFetch(_urlParams, _method, ..._body) {
  return new Promise((resolve, reject) =>
    fetch('https://programming.coffee/' + _urlParams, {
      method: _method,
      _body,
    }).then(res => {
      if (res.ok) {
        return resolve(res.json())
      } else {
        console.log(reject())
      }
    })
  )
}
