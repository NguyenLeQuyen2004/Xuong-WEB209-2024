import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Thông tin liên hệ
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Địa chỉ: 123 Đường ABC, Thành phố XYZ
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Số điện thoại: 0123456789
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Liên kết
            </Typography>
            <Typography variant="body1" component="nav">
              <Link href="/" color="textPrimary">
                Trang chủ |
              </Link>
              <Link href="/about" color="textPrimary">
                Giới thiệu |
              </Link>
              <Link href="/products" color="textPrimary">
                Sản phẩm |
              </Link>
              <Link href="/blog" color="textPrimary">
                Blog |
              </Link>
              <Link href="/contact" color="textPrimary">
                Liên hệ
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Kết nối xã hội
            </Typography>
            <Typography variant="body1" component="nav">
              <li>
                <Link
                  href="https://facebook.com/example"
                  target="_blank"
                  color="textPrimary"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/example"
                  target="_blank"
                  color="textPrimary"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/example"
                  target="_blank"
                  color="textPrimary"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/example"
                  target="_blank"
                  color="textPrimary"
                >
                  LinkedIn
                </Link>
              </li>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          marginTop={4}
        >
          © 2024 quyennlph37238@fpt.edu.vn. Tất cả các quyền đã được bảo lưu.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
