import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "pages/Main";
import NewGift from "pages/NewGift";
import NewFriend from "pages/NewFriend";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/new-gift" element={<NewGift />} />
        <Route path="/edit-gift/:key" element={<NewGift />} />
        <Route path="/new-friend" element={<NewFriend/>} />
      </Routes>
    </BrowserRouter>
  );
}
