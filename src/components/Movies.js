import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movies({ smallCoverIimage, mediumCoverIimage, title, genres, summary }) {
    return (
        <div>
            <picture>
                <source srcSet={mediumCoverIimage} media="(min-width: 760px)"></source>
                <img src={smallCoverIimage} alt={title} />
            </picture>
            <Link to={<Movies />}>
                <h2>{title}</h2>
            </Link>
            <ul>{genres.map((genre) =>
                <li key={genre}>{genre}</li>
            )}</ul>
            <details>
                <summary>Synopsis...</summary>
                <p>{summary}</p>
            </details>
        </div>
    )
}

Movies.propTypes = {
    smallCoverIimage: PropTypes.string.isRequired,
    mediumCoverIimage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired
};
export default Movies;