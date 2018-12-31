(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-manage-admin-manage-module"],{

/***/ "./src/app/layout/admin/admin.component.css":
/*!**************************************************!*\
  !*** ./src/app/layout/admin/admin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  position: relative;\n  min-height: 100%;\n}\n\nbody {\n  height: 100%;\n}\n\n#wrapper {\n  display: flex;\n}\n\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 1rem;\n  padding-bottom: 80px;\n}\n\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 90px;\n}\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0;\n}\n\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px;\n  }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 90px;\n  }\n}\n\n.scroll-to-top {\n  position: fixed;\n  right: 15px;\n  bottom: 15px;\n  display: none;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: #fff;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 46px;\n}\n\n.scroll-to-top:focus, .scroll-to-top:hover {\n  color: white;\n}\n\n.scroll-to-top:hover {\n  background: #343a40;\n}\n\n.scroll-to-top i {\n  font-weight: 800;\n}\n\n.smaller {\n  font-size: 0.7rem;\n}\n\n.o-hidden {\n  overflow: hidden !important;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-1 {\n  z-index: 1;\n}\n\n.navbar-nav .form-inline .input-group {\n  width: 100%;\n}\n\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff;\n}\n\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none;\n}\n\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem;\n}\n\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto;\n  }\n}\n\n.sidebar {\n  width: 90px !important;\n  background-color: #212529;\n  min-height: calc(100vh - 56px);\n}\n\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem;\n}\n\n.sidebar .nav-item .nav-link {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  width: 90px;\n}\n\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block;\n}\n\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(90px + 0.5rem) !important;\n  margin: 0;\n}\n\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important;\n}\n\n.sidebar .nav-item .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.sidebar .nav-item .nav-link:active, .sidebar .nav-item .nav-link:focus, .sidebar .nav-item .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important;\n  }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px;\n  }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline;\n  }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0;\n  }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 90px !important;\n  }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem;\n  }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 90px;\n  }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block;\n  }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(90px + 0.5rem) !important;\n    margin: 0;\n  }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important;\n  }\n}\n\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto;\n}\n\n.card-body-icon {\n  position: absolute;\n  z-index: 0;\n  top: -1.25rem;\n  right: -1rem;\n  opacity: 0.4;\n  font-size: 5rem;\n  -webkit-transform: rotate(15deg);\n  transform: rotate(15deg);\n}\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 1;\n    column-count: 1;\n  }\n}\n\n@media (min-width: 768px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2;\n  }\n}\n\n@media (min-width: 1200px) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2;\n  }\n}\n\n:root {\n  --input-padding-x: 0.75rem;\n  --input-padding-y: 0.75rem;\n}\n\n.card-login {\n  max-width: 25rem;\n}\n\n.card-register {\n  max-width: 40rem;\n}\n\n.form-label-group {\n  position: relative;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n  height: auto;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3);\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777;\n}\n\nfooter.sticky-footer {\n  display: flex;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: calc(100% - 90px);\n  height: 80px;\n  background-color: #e9ecef;\n}\n\nfooter.sticky-footer .copyright {\n  line-height: 1;\n  font-size: 0.8rem;\n}\n\n@media (min-width: 768px) {\n  footer.sticky-footer {\n    width: calc(100% - 225px);\n  }\n}\n\nbody.sidebar-toggled footer.sticky-footer {\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  body.sidebar-toggled footer.sticky-footer {\n    width: calc(100% - 90px);\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBR0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFO0lBQ0Usb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxtQkFBbUI7R0FDcEI7Q0FDRjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7R0FDYjtDQUNGOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLFVBQVU7RUFDVixxQkFBcUI7Q0FDdEI7O0FBR0Q7RUFDRSxnQ0FBZ0M7Q0FDakM7O0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0U7SUFDRSx3QkFBd0I7R0FDekI7RUFDRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0dBQ2Q7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsT0FBTztHQUNSO0VBQ0Q7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxvQkFBb0I7R0FDckI7RUFDRDtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtHQUNiO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtHQUNoQjtFQUNEO0lBQ0UsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLFVBQVU7R0FDWDtFQUNEO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtHQUN0QjtDQUNGOztBQUVEO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0dBQ2pCO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7R0FDakI7Q0FDRjs7QUFFRDtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtHQUNqQjtDQUNGOztBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDs7RUFFRSx1REFBdUQ7RUFDdkQsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUV2QixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBTUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSw2RUFBNkU7RUFDN0UsaURBQWlEO0NBQ2xEOztBQUVEO0VBQ0UsOENBQThDO0VBQzlDLGlEQUFpRDtFQUNqRCxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVEO0VBR0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFO0lBQ0UsMEJBQTBCO0dBQzNCO0NBQ0Y7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRTtJQUNFLHlCQUF5QjtHQUMxQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jd3JhcHBlciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI3dyYXBwZXIgI2NvbnRlbnQtd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuYm9keS5maXhlZC1uYXYgI2NvbnRlbnQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbn1cblxuYm9keS5maXhlZC1uYXYuc2lkZWJhci10b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBib2R5LmZpeGVkLW5hdiAjY29udGVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xuICB9XG4gIGJvZHkuZml4ZWQtbmF2LnNpZGViYXItdG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gIH1cbn1cblxuLnNjcm9sbC10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDU4LCA2NCwgMC41KTtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbi5zY3JvbGwtdG8tdG9wOmZvY3VzLCAuc2Nyb2xsLXRvLXRvcDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNjcm9sbC10by10b3A6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xufVxuXG4uc2Nyb2xsLXRvLXRvcCBpIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNtYWxsZXIge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLm8taGlkZGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uei0wIHtcbiAgei1pbmRleDogMDtcbn1cblxuLnotMSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5uYXZiYXItbmF2IC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsgLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgdG9wOiAwLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1uYXYgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuLnNpZGViYXIge1xuICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG59XG5cbi5zaWRlYmFyIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICB3aWR0aDogOTBweDtcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBsZWZ0OiBjYWxjKDkwcHggKyAwLjVyZW0pICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51LmRyb3B1cCB7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cblxuLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbms6YWN0aXZlLCAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rOmZvY3VzLCAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG59XG5cbi5zaWRlYmFyLnRvZ2dsZWQge1xuICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAyMjVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogMjI1cHg7XG4gIH1cbiAgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIHRvcDogMDtcbiAgfVxuICAuc2lkZWJhci50b2dnbGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG4gIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogY2FsYyg5MHB4ICsgMC41cmVtKSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudS5kcm9wdXAge1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc2lkZWJhci5maXhlZC10b3Age1xuICB0b3A6IDU2cHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2FyZC1ib2R5LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogLTEuMjVyZW07XG4gIHJpZ2h0OiAtMXJlbTtcbiAgb3BhY2l0eTogMC40O1xuICBmb250LXNpemU6IDVyZW07XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY2FyZC1jb2x1bW5zIHtcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMTtcbiAgICBjb2x1bW4tY291bnQ6IDE7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLWNvbHVtbnMge1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXJkLWNvbHVtbnMge1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgfVxufVxuXG46cm9vdCB7XG4gIC0taW5wdXQtcGFkZGluZy14OiAwLjc1cmVtO1xuICAtLWlucHV0LXBhZGRpbmcteTogMC43NXJlbTtcbn1cblxuLmNhcmQtbG9naW4ge1xuICBtYXgtd2lkdGg6IDI1cmVtO1xufVxuXG4uY2FyZC1yZWdpc3RlciB7XG4gIG1heC13aWR0aDogNDByZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcteSkgdmFyKC0taW5wdXQtcGFkZGluZy14KTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuZm9vdGVyLnN0aWNreS1mb290ZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbmZvb3Rlci5zdGlja3ktZm9vdGVyIC5jb3B5cmlnaHQge1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBmb290ZXIuc3RpY2t5LWZvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyNXB4KTtcbiAgfVxufVxuXG5ib2R5LnNpZGViYXItdG9nZ2xlZCBmb290ZXIuc3RpY2t5LWZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgYm9keS5zaWRlYmFyLXRvZ2dsZWQgZm9vdGVyLnN0aWNreS1mb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/admin/admin.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/admin/admin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"page-top\">\n\n<nav class=\"navbar navbar-expand navbar-dark bg-dark static-top\"\n  style=\"display: flex;\n    justify-content: space-between;\">\n\n  <a class=\"navbar-brand mr-1\" routerLink=\"admin/dashboards\">Some Test Work</a>\n  <a routerLink=\"../login\"><button type=\"button\" class=\"btn btn-primary\">LogOut</button></a>\n</nav>\n\n<div id=\"wrapper\">\n\n  <!-- Sidebar -->\n  <ul class=\"sidebar navbar-nav\" style=\"padding-top: 1%;\">\n    <li class=\"nav-item\" [class.active]=\"currentRoute === '/admin/'+page\" *ngFor='let page of pages'>\n      <a class=\"nav-link\" routerLink=\"{{page}}\">\n        <span style=\"font-size: 1.4em;\">{{page | titlecase}}</span>\n      </a>\n    </li>\n  </ul>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n\n      <!-- Content -->\n      <router-outlet></router-outlet>\n\n    </div>\n    <!-- /.container-fluid -->\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<!-- Scroll to Top Button-->\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\n  <i class=\"fas fa-angle-up\"></i>\n</a>\n\n<!-- Logout Modal-->\n<div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n        <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/layout/admin/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        var _this = this;
        this.router = router;
        this.pages = [
            'dashboards',
            'settings'
        ];
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (e) { return _this.currentRoute = e['url']; });
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/layout/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/layout/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-manage/admin-manage-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin-manage/admin-manage-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminManageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminManageRoutingModule", function() { return AdminManageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboards/dashboards.component */ "./src/app/pages/admin-manage/dashboards/dashboards.component.ts");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/pages/admin-manage/settings/settings.component.ts");






var routes = [
    {
        path: '',
        component: _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboards',
                pathMatch: 'full',
            },
            {
                path: 'dashboards',
                component: _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__["DashboardsComponent"],
                pathMatch: 'full',
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                pathMatch: 'full',
            },
        ]
    }
];
var AdminManageRoutingModule = /** @class */ (function () {
    function AdminManageRoutingModule() {
    }
    AdminManageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminManageRoutingModule);
    return AdminManageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/admin-manage/admin-manage.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin-manage/admin-manage.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminManageModule", function() { return AdminManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboards/dashboards.component */ "./src/app/pages/admin-manage/dashboards/dashboards.component.ts");
/* harmony import */ var _admin_manage_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-manage-routing.module */ "./src/app/pages/admin-manage/admin-manage-routing.module.ts");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/pages/admin-manage/settings/settings.component.ts");








var AdminManageModule = /** @class */ (function () {
    function AdminManageModule() {
    }
    AdminManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__["DashboardsComponent"],
                _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_manage_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminManageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], AdminManageModule);
    return AdminManageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin-manage/dashboards/dashboards.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin-manage/dashboards/dashboards.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLW1hbmFnZS9kYXNoYm9hcmRzL2Rhc2hib2FyZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin-manage/dashboards/dashboards.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin-manage/dashboards/dashboards.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin-manage/dashboards/dashboards.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin-manage/dashboards/dashboards.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsComponent", function() { return DashboardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardsComponent = /** @class */ (function () {
    function DashboardsComponent() {
    }
    DashboardsComponent.prototype.ngOnInit = function () {
    };
    DashboardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboards',
            template: __webpack_require__(/*! ./dashboards.component.html */ "./src/app/pages/admin-manage/dashboards/dashboards.component.html"),
            styles: [__webpack_require__(/*! ./dashboards.component.css */ "./src/app/pages/admin-manage/dashboards/dashboards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardsComponent);
    return DashboardsComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-manage/settings/settings.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin-manage/settings/settings.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLW1hbmFnZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin-manage/settings/settings.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin-manage/settings/settings.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\">\n  <div class=\"card-header\">Api key & Token for Trello</div>\n  <div class=\"card-body\">\n    <form (ngSubmit)=\"submit()\">\n      <div class=\"form-group\">\n        <label>Api key\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tokens.api_key\" name=\"api_key\" required style=\"width: 250%;\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>Token\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tokens.token\" name=\"token\" required style=\"width: 250%;\">\n        </label>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin-manage/settings/settings.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin-manage/settings/settings.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tokens_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tokens.service */ "./src/app/services/tokens.service.ts");



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(tokensService) {
        this.tokensService = tokensService;
        this.tokens = {
            api_key: '',
            token: '',
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tokensService.getTokens().subscribe(function (data) {
            if (data) {
                _this.tokens.api_key = data['api_key'];
                _this.tokens.token = data['token'];
            }
        });
    };
    SettingsComponent.prototype.submit = function () {
        var _this = this;
        this.tokensService.updateOrCreateTokens(this.tokens.api_key, this.tokens.token).subscribe(function (data) {
            if (data) {
                _this.tokens.api_key = data['api_key'];
                _this.tokens.token = data['token'];
            }
        });
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/pages/admin-manage/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/pages/admin-manage/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tokens_service__WEBPACK_IMPORTED_MODULE_2__["TokensService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/services/tokens.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/tokens.service.ts ***!
  \********************************************/
/*! exports provided: TokensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensService", function() { return TokensService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");





var TokensService = /** @class */ (function () {
    function TokensService(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
    }
    TokensService.prototype.getTokens = function () {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'X-CSRFToken': this.cookieService.get('csrftoken'),
                'Authorization': 'JWT ' + localStorage.getItem('token') })
        };
        return this.http.get('/api/get_tokens', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response['data']) {
                return response['data'];
            }
            return false;
        }));
    };
    TokensService.prototype.updateOrCreateTokens = function (api_key, token) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'X-CSRFToken': this.cookieService.get('csrftoken'),
                'Authorization': 'JWT ' + localStorage.getItem('token') })
        };
        var body = JSON.stringify({ api_key: api_key, token: token });
        return this.http.put('/api/get_tokens', body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response['data']) {
                return response['data'];
            }
            return false;
        }));
    };
    TokensService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TokensService);
    return TokensService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-manage-admin-manage-module.js.map