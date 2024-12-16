export const getToken = () => {
    const tokenData = localStorage.getItem("accessToken");
    if (tokenData) {
      const parsedData = JSON.parse(tokenData);
      console.log("Token do usuário:", parsedData.token); // Exibe o token
      return parsedData.token;
    }
    console.log("Nenhum token encontrado.");
    return null;
  };
  