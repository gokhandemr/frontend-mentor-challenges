// Styles
import style from "./style.module.css";

export default function Videos({filteredVideos}) {
  return (
    <section className={style.container}>
      <h2>Videos</h2>
      <ul>
        {filteredVideos.length > 0 ? (
          filteredVideos.map(({key}, index) => (
            <li key={index}>
              <iframe src={`https://www.youtube.com/embed/${key}`} allowFullScreen width={200} height={200} />
            </li>
          ))
        ) : (
          <p>No videos found</p>
        )}
      </ul>
    </section>
  );
}
