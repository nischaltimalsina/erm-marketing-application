import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet, Route } from "react-router-dom";
import { NotFound } from "../Pages/NotFound";
import PropTypes from "prop-types";
import NotPermitted from "../Pages/NotPermitted";

const CheckHasPermission = (name, type) => {
	const [auth] = useAuth();
	const permissions = (auth && auth.profile && auth.profile.permissions) || [];
	const hasPermission = permissions.some(
		(x) => x.resourceName === name && x.resourceType === type
	);
	const isDisabled = permissions.some(
		(x) => x.resourceName === name && x.resourceType === type && x.isDisabled
	);
	return { hasPermission, isDisabled };
};

export const AppProtectedComponent = (props) => {
	const { name, type, component: MyComponent, ...rest } = props;
	const { hasPermission, isDisabled } = CheckHasPermission(name, type);
	return hasPermission ? (
		<Outlet />
	) : (
		<NotPermitted disabled={isDisabled} {...rest} />
	);
};

export const AppProtectedRoute = (props) => {
	const { name, type } = props;
	const { hasPermission } = CheckHasPermission(name, type);
	return hasPermission ? <Outlet /> : <NotFound />;
};

AppProtectedComponent.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	component: PropTypes.any.isRequired,
};

AppProtectedRoute.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export const ProtectedRoutes = (props) => {
	const { name, type } = props;
	const { hasPermission } = CheckHasPermission(name, type);
	return hasPermission ? <Outlet /> : <Navigate to={"/login"}></Navigate>;
};
