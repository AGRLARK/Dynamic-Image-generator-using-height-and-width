import { useState } from 'react'

const ImageChanger = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [grayscale, setGrayScale] = useState(false);

    const imageUrl = `https://picsum.photos/${width}/${height}${grayscale ? "?grayscale" : ""}`;
    return (
        <div>
            Dynnamic Image
            <div>
                <div>
                    <label >Width :
                        <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value) || 0)}
                        />
                    </label>
                </div>
                <div>
                    <label >Height :

                        <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value) || 0)} />

                    </label>
                </div>

                <div>
                    <label >GrayScale:
                        <input type="checkbox" checked={grayscale} onChange={(e) => setGrayScale(e.target.checked)} />
                    </label>
                </div>

                <img src={imageUrl} alt='Random from Image' width={width} height={height} />

            </div>
        </div>
    )
}

export default ImageChanger