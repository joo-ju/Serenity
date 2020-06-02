import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';



function Movie(props) {
    return (
        <div>
        <MoviePoster poster={props.poster}/>
        <h1>hello this is a movie</h1>
        <h1>{props.title}</h1>
        </div>
    );
  }
// propTypes를 사용하면 부모 컴포넌트에서 얻는 정보의 종류가 무엇인지, 있는지 없는지 알수 있음.
Movie.propTypes = {
  title: PropTypes.string.isRequired,       // string이 아니라 다른 데이터 타입이면 오류 발생
  poster: PropTypes.string.isRequired       // 즉, 우리가 얻게되는 정보는 숫자가 아니다.
  // title: PropTypes.string.isRequired 라고 하고 App.js에서 Map()의 title을 없애면 페이지 검사에서 오류가 발생
} 
  



function MoviePoster(props) {
    return (
        <img src={props.poster}/>
        );
  }




// class Movie extends Component{
//     render() {
//         return(
//         <h1>hello this is a movie</h1>
//         )
//     }
// }

export default Movie 