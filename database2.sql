USE [Laptop]
GO
/****** Object:  Table [dbo].[ChitietDonHang]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChitietDonHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[iddonhang] [int] NULL,
	[idsanpham] [varchar](50) NULL,
	[soluong] [int] NULL,
	[tongtien] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChitietGioHang]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChitietGioHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idgiohang] [int] NULL,
	[idsanpham] [varchar](50) NULL,
	[soluong] [int] NULL,
	[tongtien] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DetailKeyBoard]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetailKeyBoard](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idsanpham] [varchar](50) NULL,
	[ketnoi] [nvarchar](20) NULL,
	[loai] [nvarchar](20) NULL,
	[den] [nvarchar](20) NULL,
	[switch] [nvarchar](20) NULL,
	[phimchucnang] [nvarchar](20) NULL,
	[size] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DonHang]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[iduser] [int] NULL,
	[tongtien] [int] NULL,
	[ngaydat] [date] NULL,
	[ngaytra] [date] NULL,
	[phuongthucthanhtoan] [nvarchar](30) NULL,
	[tinhtrang] [nvarchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[iduser] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Image]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nameImage] [nvarchar](100) NULL,
	[typeImage] [nvarchar](20) NULL,
	[position] [nvarchar](20) NULL,
	[path] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoaiSanPham]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoaiSanPham](
	[id] [varchar](50) NOT NULL,
	[ten] [nvarchar](40) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MoTaLaptop]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MoTaLaptop](
	[idsanpham] [varchar](50) NOT NULL,
	[detailcpu] [nvarchar](100) NULL,
	[detailram] [nvarchar](100) NULL,
	[detailvga] [nvarchar](100) NULL,
	[detailmanhinh] [nvarchar](100) NULL,
	[ocung] [nvarchar](100) NULL,
	[kieukhe] [nvarchar](100) NULL,
	[congxuathinh] [nvarchar](100) NULL,
	[congketnoi] [nvarchar](100) NULL,
	[ketnoikhongday] [nvarchar](100) NULL,
	[hdh] [nvarchar](100) NULL,
	[size] [nvarchar](100) NULL,
	[khoiluong] [nvarchar](100) NULL,
	[pin] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[idsanpham] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SanPham]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SanPham](
	[id] [varchar](50) NOT NULL,
	[ten] [nvarchar](100) NOT NULL,
	[gia] [int] NOT NULL,
	[idloai] [varchar](50) NULL,
	[thuonghieu] [nvarchar](20) NOT NULL,
	[namsx] [int] NOT NULL,
	[baohanh] [int] NOT NULL,
	[hienthi] [int] NOT NULL,
	[nameimage] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ThongSoLaptop]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThongSoLaptop](
	[idsanpham] [varchar](50) NOT NULL,
	[cpu] [nvarchar](20) NULL,
	[ram] [nvarchar](20) NULL,
	[vga] [nvarchar](20) NULL,
	[manhinh] [nvarchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[idsanpham] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 10/30/2021 9:49:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nameuser] [nvarchar](100) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[pass] [varchar](50) NOT NULL,
	[sdt] [nvarchar](11) NOT NULL,
	[diachi] [nvarchar](100) NOT NULL,
	[gioitinh] [nvarchar](10) NOT NULL,
	[position] [nvarchar](20) NULL,
	[nameimage] [nvarchar](200) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (NULL) FOR [ngaytra]
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (N'Thanh toán khi nhận hàng') FOR [phuongthucthanhtoan]
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (N'Chờ xác nhận') FOR [tinhtrang]
GO
ALTER TABLE [dbo].[SanPham] ADD  DEFAULT ((1)) FOR [hienthi]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ('CUSTOMER') FOR [position]
GO
ALTER TABLE [dbo].[ChitietDonHang]  WITH CHECK ADD FOREIGN KEY([iddonhang])
REFERENCES [dbo].[DonHang] ([id])
GO
ALTER TABLE [dbo].[ChitietDonHang]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[ChitietGioHang]  WITH CHECK ADD FOREIGN KEY([idgiohang])
REFERENCES [dbo].[GioHang] ([id])
GO
ALTER TABLE [dbo].[ChitietGioHang]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[DetailKeyBoard]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([iduser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD FOREIGN KEY([iduser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[MoTaLaptop]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[SanPham]  WITH CHECK ADD FOREIGN KEY([idloai])
REFERENCES [dbo].[LoaiSanPham] ([id])
GO
ALTER TABLE [dbo].[ThongSoLaptop]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
