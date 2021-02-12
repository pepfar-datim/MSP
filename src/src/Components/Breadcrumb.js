import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const routes = {
  '/': 'Home',
  '/basic': 'Basic',
  '/inputs': 'Inputs',
  '/codelist': 'Codelist',
  '/referenceIndicator': 'Reference Indicators',
  '/indicators': 'DATIM Indicators',
  '/about': 'About',
  '/codelist/indicator': 'Indicator',
  '/codelist/dataElementDetail': 'Data Elements > DataElementDetails > Details',
  '/indicators/indicatorDetail': 'Details',
  '/indicators/compareIndicators': 'CompareIndicators',
  '/codelist/compare': 'Compare'
};

const findRouteName = url => routes[url];

const getPaths = (pathname) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });

  return paths;
};

const BreadcrumbsItem = ({ ...rest, match }) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return (
      match.isExact ?
      (
        routeName === 'Codelist' ? <BreadcrumbItem active>Data Elements</BreadcrumbItem> :
        <BreadcrumbItem active>{routeName}</BreadcrumbItem>
      ) :
      (
        <BreadcrumbItem>
          <Link to={match.url || ''}>
            {routeName}
          </Link>
        </BreadcrumbItem>
      )
    );
  }
  return null;
};

const Breadcrumbs = ({ ...rest, location : { pathname }, match }) => {
  const paths = getPaths(pathname);
  return (
    <Breadcrumb >
      {paths.map(p => <Route path={p} component={BreadcrumbsItem} key={p}/>)}
    </Breadcrumb>
  );
};

export default props => (
  <div>
    <Route path="/:path" component={Breadcrumbs} {...props} />
  </div>
);

