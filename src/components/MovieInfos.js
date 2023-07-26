import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "../App";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 352px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 500;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 200;
  color: gray;
  margin: 4px 0;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span{
    opacity: 0.5;
  }
`;
const CloseButton = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  background: lightgray;
  padding: 8px;
  height: fit-content;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;

const MovieInfos = (props) => {

    const [movieInfo, setMovieInfo] = useState();

    const { selectedMovie } = props;
    useEffect(() => {
        axios
            .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
            .then((response) => setMovieInfo(response.data));
    }, [selectedMovie]);



    return (
        <Container>
            {movieInfo?<>
                <CoverImage src={movieInfo?.Poster} />
            <InfoColumn>
                <MovieName>
                    {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
                </MovieName>
                <MovieInfo>
                    IMDB Rating: <span>{movieInfo?.imdbRating}</span>
                </MovieInfo>
                <MovieInfo>
                    Year: <span>{movieInfo?.Year}</span>
                </MovieInfo>
                <MovieInfo>
                    Language: <span>{movieInfo?.Language}</span>
                </MovieInfo>
                <MovieInfo>
                    Rated: <span>{movieInfo?.Rated}</span>
                </MovieInfo>
                <MovieInfo>
                    Released: <span>{movieInfo?.Released}</span>
                </MovieInfo>
                <MovieInfo>
                    Runtime: <span>{movieInfo?.Runtime}</span>
                </MovieInfo>
                <MovieInfo>
                    Genre: <span>{movieInfo?.Genre}</span>
                </MovieInfo>
                <MovieInfo>
                    Director: <span>{movieInfo?.Director}</span>
                </MovieInfo>
                <MovieInfo>
                    Actors: <span>{movieInfo?.Actors}</span>
                </MovieInfo>
                <MovieInfo>
                    Plot: <span>{movieInfo?.Plot}</span>
                </MovieInfo>
            </InfoColumn>
            <CloseButton onClick={() => props.onMovieSelect()}>X</CloseButton>
            </>:"Loading..."}
        </Container>
    );
};

export default MovieInfos;