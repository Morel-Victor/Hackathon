import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Container, Header, Title, Lyrics, View, Video } from './style';
import backgroundVideo from '../../assets/backgroundVideo.jpeg';
import Btn from '../Btn/Btn';

export default function Karaoké({ track }) {
  // const [videos, setVideos] = useState([]);
  const [lyrics, setLyrics] = useState(true);
  const { title } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.lyrics.ovh/v1/${track.artist}/${title}`)
      .then(({ data }) => {
        const sLyrics = data.lyrics.split('\n').map((row) => {
          return <p>{row}</p>;
        });
        setLyrics(sLyrics);
      });
  }, []);

  return (
    <Container>
      <Header backgroundVideo={backgroundVideo}>
        <Btn />
        <Title>
          {track.artist} - {track.title}
        </Title>
      </Header>
      <View>
        <Video>
          <ReactPlayer
            id="reactPlayer"
            url={track.video}
            width="48vw"
            height="33vw"
          />
        </Video>
        <Lyrics>{lyrics}</Lyrics>
      </View>
    </Container>
  );
}

Karaoké.propTypes = {
  track: PropTypes.shape,
};
Karaoké.defaultProps = {
  track: {},
};
