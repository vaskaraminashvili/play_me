<template>
  <nav class="navbar navbar-light navbar-vertical navbar-expand-xl">
    <div class="d-flex align-items-center">
      <div class="toggle-icon-wrapper">
        <button
          class="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Toggle Navigation"
        >
          <span class="navbar-toggle-icon"
            ><span class="toggle-line"></span
          ></span>
        </button>
      </div>
      <a class="navbar-brand" href="index.html">
        <div class="d-flex align-items-center py-3">
          <img
            class="me-2"
            src="assets/img/icons/spot-illustrations/falcon.png"
            alt=""
            width="40"
          /><span class="font-sans-serif">falcon</span>
        </div>
      </a>
    </div>
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
      <div class="navbar-vertical-content scrollbar">
        <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
          <li class="nav-item">
            <!-- label-->
            <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
              <div class="col-auto navbar-vertical-label">Something</div>
              <div class="col ps-0">
                <hr class="mb-0 navbar-vertical-divider" />
              </div>
            </div>

            <!-- parent pages--><a
              class="nav-link"
              href="documentation/gulp.html"
              role="button"
              aria-expanded="false"
            >
              <div class="d-flex align-items-center">
                <span class="nav-link-icon"
                  ><span class="fab fa-gulp"></span></span
                ><span class="nav-link-text ps-1">Gulp</span>
              </div>
            </a>
            <!-- parent pages-->
            <Link
              class="nav-link"
              :href="route('admin.users')"
              role="button"
              aria-expanded="false"
            >
              <div class="d-flex align-items-center">
                <span class="nav-link-icon"
                  ><span class="fas fa-palette"></span></span
                ><span class="nav-link-text ps-1">Design file</span>
              </div>
            </Link>
            <!-- parent pages--><a
              class="nav-link"
              href="changelog.html"
              role="button"
              aria-expanded="false"
            >
              <div class="d-flex align-items-center">
                <span class="nav-link-icon"
                  ><span class="fas fa-code-branch"></span></span
                ><span class="nav-link-text ps-1">Changelog</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
