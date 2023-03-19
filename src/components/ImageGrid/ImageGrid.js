import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../action';

import './styles.css';

const ImageGrid = ({ images, isLoading, error, loadImages }) => {
  useEffect(() => {
    loadImages();
  }, []);
  return (
    <div className='content'>
      <section className='grid'>
        {images.map((image) => (
          <div key={image.id} className={`item item-${Math.ceil(image.height / image.width)}`}>
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      {error && <div>{JSON.stringify(error)}</div>}
      <button onClick={() => loadImages()}>Load Images</button>
    </div>
  );
};

const mapStateToProps = ({ isLoading, error, images }) => ({
  isLoading,
  error,
  images,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
