import { Component } from "react";

export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        expense: boolean;
    }
}