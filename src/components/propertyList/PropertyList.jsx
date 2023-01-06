import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");
    
    const images = [
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/131230004.jpg?k=16eeb7942919b7688fc1b4ebf8f8a7e375a6c8917d564ee312cb13c32a3e8e50&o=&hp=1",
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/131230004.jpg?k=16eeb7942919b7688fc1b4ebf8f8a7e375a6c8917d564ee312cb13c32a3e8e50&o=&hp=1",
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/131230004.jpg?k=16eeb7942919b7688fc1b4ebf8f8a7e375a6c8917d564ee312cb13c32a3e8e50&o=&hp=1",
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/131230004.jpg?k=16eeb7942919b7688fc1b4ebf8f8a7e375a6c8917d564ee312cb13c32a3e8e50&o=&hp=1",
        "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/131230004.jpg?k=16eeb7942919b7688fc1b4ebf8f8a7e375a6c8917d564ee312cb13c32a3e8e50&o=&hp=1"
    ];

  return (
    <div className="pList">
       {loading ? (
        "loading"
        ) : ( 
        <>
        {data && 
            images.map((img, i) => (
                <div className="pListItem" key={i}>
                    <img 
                        src= {img} 
                        alt="" 
                        className="pListImg"
                    />
                    <div className="pListTitles">
                        <h1>{data[i]?.type}</h1>
                        <h2>{data[i]?.count} {data[i]?.type}</h2>
                    </div>
                </div>
            ))}
        </>
        )}
    </div>
  );
};

export default PropertyList;