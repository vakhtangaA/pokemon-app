import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client/react";
import "./App.css";
import { PokemonsContainer } from "./containers/PokemonsContainer";

function App() {
	const client = new ApolloClient({
		uri: "https://graphql-pokemon2.vercel.app/",
	});

	return (
		<ApolloProvider client={client}>
			<main>
				<PokemonsContainer></PokemonsContainer>
			</main>
		</ApolloProvider>
	);
}

export default App;
