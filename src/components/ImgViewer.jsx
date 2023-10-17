const ImgViewer = ( {img_url, filename} ) => {
    return (
        <div className="py-2 w-full max-h-screen flex">
            <img src={img_url} alt={filename} className="object-contain" />
        </div>
    );
}

export default ImgViewer;