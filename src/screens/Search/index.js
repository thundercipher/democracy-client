import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Navigation, Navigator } from "react-native-navigation";
import { withApollo } from "react-apollo";
import { TouchableHighlight } from "react-native";

import Header from "./Header";
import ListRow from "../../components/ListRow";
import VoteListItem from "../../components/VoteListItem";
import ListSectionHeader from "../../components/ListSectionHeader";

import searchProcedures from "../../graphql/queries/searchProcedures";

import preventNavStackDuplicate from "../../hocs/preventNavStackDuplicate";

Navigation.registerComponent("democracy.Search.Header", () => Header);

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

const List = styled.SectionList``;

const Text = styled.Text`
  font-size: 18;
  color: grey;
`;

const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: "large"
})``;

const LoadingWrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: 18;
`;

const NoResultsWrapper = styled.View`
  flex: 1;
  padding-top: 18;
  align-items: center;
`;

const NoResultsImage = styled.Image.attrs({
  source: require("../../../assets/images/search_no_results.png"),
  opacity: 0.2
})`
  margin-top: 18;
`;

class SearchScreen extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#4494d3"
  };

  constructor(props) {
    super(props);
    this.props.navigator.setStyle({
      navBarCustomView: "democracy.Search.Header",
      navBarComponentAlignment: "fill",
      navBarCustomViewInitialProps: {
        navigator: this.props.navigator,
        onChangeTerm: this.onChangeTerm
      }
    });
  }

  state = {
    searchData: [],
    term: "",
    loading: false
  };

  onChangeTerm = async term => {
    this.setState({ loading: true, term });
    const { client: { watchQuery } } = this.props;

    if (!this.observableSearchQuery) {
      this.observableSearchQuery = await watchQuery({
        query: searchProcedures,
        variables: { term },
        fetchPolicy: "network-only"
      });

      this.observableSearchQuery.subscribe({
        next: result => this.handleSearchResults({ ...result, term })
      });
    } else {
      this.observableSearchQuery.refetch({ term });
      // .then(result => this.handleSearchResults({ ...result, term }));
    }
  };

  onItemClick = ({ item, section }) => () => {
    if (section === "Ergebnisse") {
      this.props.navigateTo({
        screen: "democracy.Detail",
        title: "Abstimmung".toUpperCase(),
        passProps: { ...item }
      });
    } else {
      this.onChangeTerm(item);
    }
  };

  handleSearchResults = ({
    data: { loading, searchProceduresAutocomplete: { procedures, autocomplete } }
  }) => {
    if (!loading) {
      const searchData = [
        { title: "Vorschläge", data: autocomplete },
        { title: "Ergebnisse", data: procedures }
      ];
      this.setState({ searchData, loading: false });
    }
  };

  observableSearchQuery = null;

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <LoadingWrapper>
          <ActivityIndicator />
        </LoadingWrapper>
      );
    }

    return (
      <Wrapper>
        <List
          sections={this.state.searchData}
          renderSectionHeader={({ section: { title, data } }) =>
            data.length > 0 ? <ListSectionHeader title={title} /> : null
          }
          renderItem={({ item, section: { title } }) => (
            <TouchableHighlight
              onPress={this.onItemClick({ item, section: title })}
              underlayColor="rgba(68, 148, 211, 0.1)"
            >
              <ListRow>
                {title === "Ergebnisse" && <VoteListItem {...item} date={item.voteDate} />}
                {title === "Vorschläge" && <Text>{item}</Text>}
              </ListRow>
            </TouchableHighlight>
          )}
          keyExtractor={item => (typeof item === "string" ? item : item._id)}
          ListEmptyComponent={() => {
            const { term } = this.state;
            if (term) {
              return (
                <NoResultsWrapper>
                  <Text>Leider nichts gefunden.</Text>
                  <NoResultsImage />
                </NoResultsWrapper>
              );
            }
            return null;
          }}
        />
      </Wrapper>
    );
  }
}

SearchScreen.propTypes = {
  navigator: PropTypes.instanceOf(Navigator),
  navigateTo: PropTypes.func.isRequired
};

SearchScreen.defaultProps = {
  navigator: undefined
};

export default withApollo(preventNavStackDuplicate(SearchScreen));
