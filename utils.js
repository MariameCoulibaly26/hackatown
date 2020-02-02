import { NavigationActions } from 'react-navigation';

export function nav(stack, screen) {
	this.props.navigation.navigate(NavigationActions.navigate({
	  routeName: stack,
	  action: NavigationActions.navigate({routeName: screen})
	}));
}
