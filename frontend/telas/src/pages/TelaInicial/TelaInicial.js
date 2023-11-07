import Footer1 from "../../components/Footer1/Footer";
import Header1 from "../../components/Header1/Header1";
import imagem from '../../assets/balanca.png'
import './TelaInicial.css'
import { Text } from "@chakra-ui/react";

const TelaInicial = () => {
    return (
        <>
        <Header1/>
        <div className="container1">
      <div className="content1">

        <Text
        fontSize={44}
        // textDecoration={'GrayText'}
        fontWeight={'bold'}
        lineHeight={'110%'}
        letterSpacing={'-2%'}  
        color={'#89DFBB'}
        marginTop={20}
        >INTERVENÇÃO MUNICIPAL</Text>

        <Text
        fontSize={25}

        fontWeight={'thin'}
        lineHeight={'110%'}
        letterSpacing={'-2%'}  
        color={'#black'}
        marginTop={3}
        textAlign={'justify'}
        >    A justiça não consiste em ser neutro entre o certo e o errado, 
        mas em descobrir o certo e sustentá-lo, onde quer que ele se encontre, contra o errado.</Text>

        <Text
        fontSize={20}
        lineHeight={'110%'}
        letterSpacing={'-2%'}  
        color={"grey"}
        marginTop={3}
        textAlign={'right'}
        >- Theodore Roosevelt</Text>


      </div>
      <div className="image-section1">
        <img src={imagem} alt="Imagem" />
      </div>
    </div>
        <Footer1/>
        </>
    );
  };
  
  export default TelaInicial;