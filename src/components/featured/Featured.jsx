import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Jakarta,Bandung,Surabaya");
    
  return (
    <div className="featured">
       { loading ? ("Loading.. please wait") : (<>
        <div className="featuredItem">
            <img 
                src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/358464004.jpg?k=ac7efa6ef6232ec3da6cf37e903461f6373b0bb79943113a6813f36435f32270&o=&hp=1" 
                alt="" 
                className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Jakarta</h1>
                <h2>{data[0]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/358464004.jpg?k=ac7efa6ef6232ec3da6cf37e903461f6373b0bb79943113a6813f36435f32270&o=&hp=1" 
                alt="" 
                className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Bandung</h1>
                <h2>{data[1]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/358464004.jpg?k=ac7efa6ef6232ec3da6cf37e903461f6373b0bb79943113a6813f36435f32270&o=&hp=1" 
                alt="" 
                className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Surabaya</h1>
                <h2>{data[2]} Properties</h2>
            </div>
        </div>
        </>)}
    </div>
  );
};

export default Featured;