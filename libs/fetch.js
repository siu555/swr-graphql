// const GRAPHQL_ENDPOINT = 'http://localhost:8080/v1/graphql';
const GRAPHQL_ENDPOINT = 'https://intimate-cub-67.hasura.app/v1/graphql'

const headers = {'Content-Type': 'application/json',
'x-hasura-admin-secret':'2c3SYWnx7K1hbCEoAXgnD7A9Tzu3KIHM2XXqRMp0m52ywqrA80NkEaShEwPELyNU'};

const _fetch = async(...args) => {

  const options = {
    headers : headers,
    method: 'POST',
    body: JSON.stringify(args[0])
  };
  const res = await fetch(GRAPHQL_ENDPOINT, options)
  const res_json = await res.json();
  if(res_json.errors) {
  	throw(JSON.stringify(res_json.errors));
  }
  return res_json.data;
}

export default _fetch;



