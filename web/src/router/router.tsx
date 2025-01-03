/* eslint-disable react-hooks/exhaustive-deps */
//import { useEffect } from "react";
//import { useAuth } from "../hooks/auth";
//import { AuthRoutes } from "./auth-router";
//import { api } from "../lib/axios";
import { AppRoutes } from "./app-routes";

export function Router() {
  /* const {user, signOut} = useAuth()

  useEffect(() => {
    api.get('/user/valideted').catch(error => {
      if(error.response?.status === 401) {
        signOut()
      }
    })
  }, []) */
  return (
    <>
      <AppRoutes />
    </>
  )
}