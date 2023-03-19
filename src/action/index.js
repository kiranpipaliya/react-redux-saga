import { IMAGES } from '../constant';

const loadImages = () => ({ type: IMAGES.LOAD });

const setImages = (images) => ({ type: IMAGES.LOAD_SUCCESS, images });

const setError = (error) => ({ type: IMAGES.LOAD_FAIL, error });

export { loadImages, setImages, setError };