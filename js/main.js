function Bookmark(elem, btn_class, pg_class, pg_id) {
  // 選單切換
  $(btn_class).removeClass("active");
  $(elem).addClass("active");
  // 內容顯示
  $(pg_class).css("display", "none");
  $(pg_id).css("display", "block");
}
