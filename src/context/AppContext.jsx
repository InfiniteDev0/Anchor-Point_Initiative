import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const getMentalHealthNews = async () => {
    setLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const { data } = await axios.get(apiUrl);
      if (data && data.results) {
        setArticles(data.results);
        setLoading(false);
        return data.results;
      } else {
        setLoading(false);
        toast.error("No results found.");
        return [];
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to fetch news.");
      return [];
    }
  };

  const value = {
    token,
    setToken,
    getMentalHealthNews,
    loading,
    articles,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
