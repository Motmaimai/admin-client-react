import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Create} from './components/create/Create'
import {Update} from './components/update/Update'
import {ExampleHeader} from './ExampleHeader'
import React from 'react'

const exampleBreadCrumbs: Array<PageLink> = [
  {
    title: 'Example',
    path: '/crafted/pages/example/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ExamplePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ExampleHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='overview'
        element={
          <>
            <PageTitle breadcrumbs={exampleBreadCrumbs}>Overview</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path='create'
        element={
          <>
            <PageTitle breadcrumbs={exampleBreadCrumbs}>Create</PageTitle>
            <Create />
          </>
        }
      />
      <Route
        path='update'
        element={
          <>
            <PageTitle breadcrumbs={exampleBreadCrumbs}>Update</PageTitle>
            <Update />
          </>
        }
      />
      <Route index element={<Navigate to='/crafted/pages/example/overview' />} />
    </Route>
  </Routes>
)

export default ExamplePage
