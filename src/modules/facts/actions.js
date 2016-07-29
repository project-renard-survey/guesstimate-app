import {selectorSearch} from 'gEngine/facts'

export function getSuggestion(selector) {
  return (dispatch, getState) => {
    const {partial, suggestion} = selectorSearch(selector, [...getState().facts.globalFacts, ...getState().facts.organizationFacts])
    dispatch({type: 'SUGGEST_FACT', suggestion: suggestion.replace(partial, '')})
  }
}

export function clearSuggestion() {
  return {type: 'CLEAR_SUGGESTION'}
}

export function loadByOrg(facts) {
  return {type: 'LOAD_FACTS_BY_ORG', facts}
}
