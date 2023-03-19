import { IMAGES, STATS } from '../constant';

const loadImages = () => ({ type: IMAGES.LOAD });

const setImages = (images) => ({ type: IMAGES.LOAD_SUCCESS, images });

const setError = (error) => ({ type: IMAGES.LOAD_FAIL, error });

///
const loadImageStats = (id) => ({ type: STATS.LOAD, id });

const setImagesStats = (id, downloads) => ({ type: STATS.LOAD_SUCCESS, id, downloads });

const setImagesStatsError = (id) => ({ type: STATS.LOAD_FAIL, id });

export { loadImages, setImages, setError, loadImageStats, setImagesStats, setImagesStatsError };
