<template lang="html">
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="#" class="nav-link">
            <div class="profile-image">
              <img
                class="img-xs rounded-circle"
                src="../../assets/images/airbe/doctor_profile.jpg"
                alt="profile image"
              />
              <div class="dot-indicator bg-success"></div>
            </div>
            <div class="text-wrapper">
              <p class="profile-name">John Doe</p>
              <p class="designation">Doctor</p>
            </div>
          </a>
        </li>
        <li class="nav-item nav-category">Main Menu</li>
         <li class="nav-item">
          <a class="nav-link" v-b-toggle="'ui-basic'">
            <i class="menu-icon typcn typcn-coffee"></i>
            <span class="menu-title">Task Management</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/"><span class="menu-title">My Tasks</span></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tasks/"><span class="menu-title">Create Task</span></router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/patient/"
            ><span class="menu-title">Patient Data</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/messages/"><span class="menu-title">Messages</span></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'auth'">
            <i class="menu-icon typcn typcn-document-add"></i>
            <span class="menu-title">User Login</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="auth">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/pages/login/"
                  >Login</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/pages/register/"
                  >Register</router-link
                >
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="js">
import JQuery from 'jquery'
// eslint-disable-next-line
let $ = JQuery
export default {
  name: 'app-sidebar',
  mounted () {
    const body = document.querySelector('body')
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  }
}
</script>

<style lang="scss">
.container-fluid {
  padding-left: 0 !important;
}
</style>
