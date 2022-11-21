function Movies({ smallCoverIimage, mediumCoverIimage, title, genres, summary }) {
    return (
        <div>
            <picture>
                <source srcSet={mediumCoverIimage} media="(min-width: 760px)"></source>
                <img src={smallCoverIimage} alt={title} />
            </picture>
            <h2>{title}</h2>
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
export default Movies;