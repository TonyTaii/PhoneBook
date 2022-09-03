import './styleSt2.css'

function SearchDelete(){
    return(
        
        <div className="as">
        <form id="section2" className="section2">
        <input type="text" id="searchText" placeholder="Tìm kiếm"/>
        <input type="submit" id="search" value="Tìm"/></form>
        <form  id="section3"><input type="submit" id="delete" value="Xóa trùng"/></form>
        </div>
   
    );
} export default SearchDelete