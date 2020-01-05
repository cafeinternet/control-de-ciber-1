var adj = [
    '1.El predicamento de la plástica contemporánea consiste en la apropiación quística e irreflexiva de los más recientes eventos del sino-capitalismo, las tecno-ciencias y el actual surgimiento de filosofías de corte inhumanista.',
   '2.Aquella continuada chicaneria esnob por el lustre de la novedad discursiva se utiliza para:',
   '3.I. De-sustancializar el saber desde una perspectiva alienada/alienante correspondiente al agente-artista que responde desde el ahuecamiento cariado de la automatización de la academia.',
   '4.II. Posicionar el output-objetual del agente-artista dentro de la apretada sobreoferta del mercado de la plástica.',
   '5.III. Volver interminable la subsunción negativa de la plástica y los agentes-artistas a un corto- circuito anti-dialéctico…',
   '6.…en donde se obstaculiza el acto de pensarse a sí mism@ por medio de la saturación cognitiva de giga-palabrerías y psicologismos autistas que aparentan profundidad de campo.',
   '7.IV. Una eventual gentrificación esporófita que desdibuja un pensamiento/praxis concreto/sintético de vanguardia que es el resultado deductivo y científico de una para-academia en lenta expansión.',
   '8.V. Por ende, este pensamiento/praxis por medio de este desdibujamiento lo consideramos como ideológico. ',
   '9.VI. Y la inhabilidad del agente-artista + la estructura convergente del aparato académico de pensarse a sí y en sí, la consideramos como un estado de profunda miscognición.',
   '10.En esta ideología y miscognición se encarnan entonces violentas discontinuidades entre A) Los cimientos en putrefacción del post-estructuralismo…',
   '11.…representados en un objetualismo/conceputalismo zombie en histéresis con nuestra más actual imagen del mundo.',
   '12.B) El post-humanismo o a-humanismo que aparece en coloridos gradientes de malinterpretación neoliberal que se dirigen a una mistificación cuasi-religiosa de los objetos…',
   '13.…o lo radicalmente otro o no-humano. Se observa que el programa teórico procesual del supuesto humano-aumentado o en aumento (teleología cyborg) deriva actualmente en nuevas variantes de lo teológico.',
   '14.C) El Inhumanismo computacional y neo-racionalismo característicos al advenimiento de la I.A.F. = Inteligencia artificial fuerte y la formalización de la cuestión del riesgo existencial…',
   '15.…que irrumpe en nuestro horizonte gracias al inminente colapso de la presente ecología humana = e.x.t.i.n.c.i.ó.n.',
   '16.Sin embargo es posible que a pesar de que instantáneamente la plástica se empuje a dar un salto hacia el punto C)…',
   '17.…haya un detenimiento de este engranaje macabro a partir de los avatares híbridos de un Meccano-Hegel o de un Robo-Kant que hacen parte de la continuidad del proyecto iniciado por el ahora cripto-fascista de Nick Land…',
   '18.…y el innegable legado de su experimentación teórica con el CCRU (Cybernetic-Culture-Research-Unit).',
   '19.Con esto quiero decir que al hacer-andar el resorte motor de un Meccano-Hegel o de un Robo-Kant tangibles, -productos de la ingeniería de la para-academia- (en compañía de un Carnap-Lisérgico formulado por R. Negarestani o de un Sellars-Androide)…',
   '20.…necesariamente somos inducidos a la labor inhumana de una cognición en aumento o de una razón dirigida, un sapere aude para lo que queda de nuestro siglo….',
   '21.…que efectiviza a su vez la necesidad de una re-cognición // el reconocimiento reflexivo que actualmente se encuentra secuestrado en los calabozos sombríos del transitorio oscurantismo de la plástica contemporánea.',
   '22.Consideremos entonces que la finalidad de esta re-cognición, la tecno-sapiencia, habrá de ser una herramienta útil y no una directriz para lograr una conexión entre la plástica y el saber. ',
   '23.No una presunción. No una superficie.',
   '24.A su vez nos corresponde dos tareas a partir de la emersión de la tecno-sapiencia: A) su inminente descolonización o extirpación y mutación al contexto tropical (una neo-tropicalía)…',
   '25.…y B) el escepticismo metodológico sobre falocentrismo implícito en la revitalización del programa de la razón que ha pendulado de la hegemonía occidental devuelta a su cuna oriental sin cuestionarse robustamente sobre la esclerótica del problema patriarcal.',
   '26.En continuar el desplazamiento de la cuestión patriarcal, respondemos al postulante inicial del inhumanismo. El mitólogo blanco de Lyotard y su insistencia de la máquina tecno-sapiente a la que se le impone un binarismo sexual…',
   '27.…que prontamente destruimos al proponer: una morfogénesis del sexo, una artificialización en múltiplos o derivados… ',
   '28.…que aparece en obligación con la tecno-sapiencia y una futuro-plástica aplicada que logre formalizar aquella artificialización…',
   '29.…no como imposibilidad lejana sino en una iteración indefinida y comprobable. Un límite ideal (más no idealista) que es el reflejo de una “responsabilidad en incremento relativa a una capacidad en incremento” como lo postula P. Wolfendale.',
   '30.Esta responsabilidad es el ultimátum y finalidad que le corresponde a las artes con lo que le permite aquella capacidad en incremento de la tecno-sapiencia. ',
   ];
   
   
   var getAdjective = function() {
     return adj[Math.floor(Math.random() * adj.length)];
   };
 
   $('#theButton').click(function() {
     $('.adj').html(getAdjective());
     $('.noun').html(getNoun());
   });