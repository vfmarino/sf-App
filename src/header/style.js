import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    top: 0,
  
  },
  text: {
    fontFamily: 'Montserrat',
    color: '#204c7a', 
    fontWeight: "700",
  },
  image:{
    width: '80%', // Largura da imagem é definida como 80% da largura do componente pai
    height: '20%',
    aspectRatio: 1, // Proporção da imagem é mantida
    resizeMode: 'contain', // A imagem é redimensionada para caber no espaço disponível, mantendo a proporção original
  }
});

export default styles;
