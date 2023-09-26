const FunctionalComponent = (props) => (
  <div>
    <h1>Membuat komponen dengan functional component</h1>
    <h3>hello {props.nama}, selamat belajar</h3>
  </div>
);
export default FunctionalComponent;

/* kekurangan funtional component:
- tidak mempunyai sesuatu yang disebut state, class component tak punya state.

>> kelebihannya :
- terlihat mudah, sedikit yang harus ditulis dibandingkan class component
- keduanya punya props baik class maupun functional component*/
